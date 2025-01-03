import React from 'react';

const ApiDocumentation = () => {
    return (
        <div>
            <h1>API 接口文档</h1>
            <h2>1. 数据上传接口</h2>
            <p><strong>接口路径：</strong>/data-upload</p>
            <p><strong>请求方法：</strong>POST</p>
            <p><strong>请求参数：</strong></p>
            <ul>
                <li>video: 上传的视频文件</li>
                <li>category: 视频类别（car/person）</li>
            </ul>
            <p><strong>返回示例：</strong></p>
            <pre>{JSON.stringify({ status: 'success', message: 'Video uploaded successfully', category: 'car' }, null, 2)}</pre>

            <h2>2. 视频处理接口</h2>
            <p><strong>接口路径：</strong>/video</p>
            <p><strong>请求方法：</strong>POST</p>
            <p><strong>请求参数：</strong></p>
            <ul>
                <li>video: 上传的视频文件</li>
                <li>interval: 处理时间间隔（单位：毫秒）</li>
            </ul>
            <p><strong>返回示例：</strong></p>
            <pre>{JSON.stringify({ processed_video_url: 'https://example.com/video.mp4', pedestrian_counts: [20, 30], vehicle_counts: [25, 35] }, null, 2)}</pre>

            <h2>3. 视频流处理接口</h2>
            <p><strong>接口路径：</strong>/video-streaming</p>
            <p><strong>请求方法：</strong>POST</p>
            <p><strong>请求参数：</strong></p>
            <ul>
                <li>video: 上传的视频文件</li>
                <li>interval: 处理时间间隔（单位：毫秒，默认为250）</li>
            </ul>
            <p><strong>返回类型：</strong>事件流</p>

            <h2>4. 人脸检测接口</h2>
            <p><strong>接口路径：</strong>/face-detect</p>
            <p><strong>请求方法：</strong>POST</p>
            <p><strong>请求参数：</strong></p>
            <ul>
                <li>image: 上传的图像文件</li>
            </ul>
            <p><strong>返回类型：</strong>事件流</p>

            <h2>5. 车牌识别接口</h2>
            <p><strong>接口路径：</strong>/licence-plate</p>
            <p><strong>请求方法：</strong>POST</p>
            <p><strong>请求参数：</strong></p>
            <ul>
                <li>licence_plate: 车牌号</li>
            </ul>
            <p><strong>返回类型：</strong>事件流</p>

            <h2>6. 获取所有视频信息接口</h2>
            <p><strong>接口路径：</strong>/get_videos_info</p>
            <p><strong>请求方法：</strong>GET</p>
            <p><strong>返回示例：</strong></p>
            <pre>{JSON.stringify([{ upload_time: '2024-07-13 12:00:00', file_name: 'video.mp4', processing_status: 1, category: 'car' }], null, 2)}</pre>

            <h2>7. 删除视频信息接口</h2>
            <p><strong>接口路径：</strong>/delete_video_data</p>
            <p><strong>请求方法：</strong>POST</p>
            <p><strong>请求参数：</strong></p>
            <ul>
                <li>upload_time: 上传时间</li>
                <li>file_name: 文件名</li>
            </ul>
            <p><strong>返回示例：</strong></p>
            <pre>{JSON.stringify({ message: '删除成功' }, null, 2)}</pre>

            <h2>8. 添加用户接口</h2>
            <p><strong>接口路径：</strong>/add_user</p>
            <p><strong>请求方法：</strong>POST</p>
            <p><strong>请求参数：</strong></p>
            <ul>
                <li>nickname: 用户昵称</li>
                <li>password: 用户密码</li>
                <li>email: 用户邮箱</li>
                <li>role: 用户角色（可选，默认是 user）</li>
            </ul>
            <p><strong>返回示例：</strong></p>
            <pre>{JSON.stringify({ message: '用户添加成功' }, null, 2)}</pre>
        </div>
    );
};

export default ApiDocumentation;
