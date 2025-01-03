import React, { useEffect, useState } from 'react';
import { Checkbox, message, Button, Space, Image, Input, Tag, Upload, Spin } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import moment from 'moment'; // 用于时间格式化
import '/src/css/image-search.css';

const { Dragger } = Upload;

const App = () => {
    const [groups, setGroups] = useState([]); // 群组列表
    const [selectedGroups, setSelectedGroups] = useState([]); // 选中的群组
    const [results, setResults] = useState([]); // 搜索结果
    const [imageCount, setImageCount] = useState(5); // 图片数量
    const [fileList, setFileList] = useState([]); // 上传的文件列表
    const [loading, setLoading] = useState(false); // 数据加载状态

    const BASE_API = import.meta.env.VITE_BASE_API || 'http://localhost:8000';

    useEffect(() => {
        const fetchGroups = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${BASE_API}/groups`);
                const groupList = Object.entries(response.data).map(([groupId, groupName]) => ({
                    label: `${groupName} (${groupId})`, // 在群名后附加群号
                    value: groupId,
                }));
                setGroups(groupList);
            } catch (error) {
                console.error('Failed to fetch groups:', error);
                message.error('无法加载群组数据，请稍后重试。');
            } finally {
                setLoading(false);
            }
        };

        fetchGroups();
    }, [BASE_API]);

    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('您只能上传 JPG/PNG 文件!');
            return false;
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('图片大小必须小于 2MB!');
            return false;
        }
        setFileList([file]); // 只保留一张图片
        return false; // 阻止默认上传行为
    };

    const handleSearch = async () => {
        if (!selectedGroups.length) {
            message.warning('请选择至少一个群组！');
            return;
        }
        if (!fileList.length) {
            message.warning('请上传一张图片！');
            return;
        }

        try {
            setLoading(true);
            const formData = new FormData();
            formData.append('image', fileList[0]);
            // formData.append('groups', selectedGroups); // 将选中的群组作为字符串上传
            formData.append('image_count', imageCount);

            selectedGroups.forEach(group => formData.append('groups', group));
            console.log(selectedGroups)

            const response = await fetch(`${BASE_API}/image-search`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('请求失败');
            }

            const data = await response.json();

            const resultsWithNames = data.matched_images.map((image) => {
                const group = groups.find((g) => g.value === image.group_id); // 查找匹配的群组
                return {
                    ...image,
                    group_name: group ? group.label.split(' (')[0] : '未知群组', // 提取群名部分
                };
            });

            setResults(resultsWithNames);
            message.success('搜索成功！');
        } catch (error) {
            console.error('Search error:', error);
            message.error('搜索失败，请稍后再试！');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="image-search-input" style={{ marginTop: 20 }}>
                <h2>📸📸📸图片检索</h2>
                <h3>想用Q群机器人利用图片检索图片吗？来试试这个功能！</h3>
                <div className="image-search-input-and-button">
                    <div className='image-search-num-input'
                        style={{ marginBottom: 10, display: 'flex', flexDirection: 'row' }}>
                        <p
                        style={{marginBottom: 0, marginTop: 5}}
                        >请输入检索数量：</p>
                        <Input
                            className='image-search-num-input-input'
                            style={{ marginBottom: 10 }}
                            type="number"
                            min={1}
                            max={100}
                            placeholder="图片数量"
                            value={imageCount}
                            onChange={(e) => setImageCount(Number(e.target.value))}
                        />
                    </div>
                    <Dragger
                        fileList={fileList}
                        beforeUpload={beforeUpload}
                        onRemove={() => setFileList([])} // 移除文件
                        accept="image/*"
                        showUploadList={{
                            showRemoveIcon: true, // 显示移除按钮
                        }}
                        style={{
                            border: '1px dashed #1890ff',
                            borderRadius: '10px',
                            padding: '20px',
                            textAlign: 'center',
                        }}
                    >
                        <p>
                            <UploadOutlined style={{ fontSize: '2rem', color: '#1890ff' }} />
                        </p>
                        <p>点击或拖拽文件到此处上传</p>
                    </Dragger>
                    
                </div>
                <div className="image-checkBox-select-groups"
                style={{marginTop: 20}}>
                    {loading ? (
                        <Spin />
                    ) : groups.length > 0 ? (
                        <Checkbox.Group
                            options={groups}
                            value={selectedGroups}
                            onChange={setSelectedGroups}
                        />
                    ) : (
                        <p>加载群组数据中...</p>
                    )}
                    
                </div><Button
                        type="primary"
                        style={{ marginTop: 20 }}
                        onClick={handleSearch}
                        disabled={loading} // 防止重复提交
                    >
                        {loading ? '搜索中...' : '搜索'}
                    </Button>
            </div>

            <div className="results-images-show" style={{ marginTop: 40 }}>
                {results.length > 0 ? (
                    <div className="results-container">
                        {results.map((result, index) => (
                            <div className="result-item" key={index}>
                                <Image
                                    width={150}
                                    height={150}
                                    src={result.url}
                                    alt={`Result ${index}`}
                                    style={{
                                        borderRadius: 20,
                                        objectFit: 'cover',
                                    }}
                                />
                                <div className="pic-info">
                                    <p><strong>群号：</strong>{result.group_id}</p>
                                    <p><strong>群名：</strong>{result.group_name}</p>
                                    <p><strong>时间：</strong>{moment(result.timestamp).format('MM月DD日 HH时mm分')}</p>
                                    <Tag color="blue">{result.group_name}</Tag>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>{loading ? '' : '没有找到匹配的图片，请调整搜索条件重试！'}</p>
                )}
            </div>
        </>
    );
};

export default App;
