import{j as s}from"./index-6uUUDMWa.js";const r=()=>s.jsxs("div",{children:[s.jsx("h1",{children:"API 接口文档"}),s.jsx("h2",{children:"1. 数据上传接口"}),s.jsxs("p",{children:[s.jsx("strong",{children:"接口路径："}),"/data-upload"]}),s.jsxs("p",{children:[s.jsx("strong",{children:"请求方法："}),"POST"]}),s.jsx("p",{children:s.jsx("strong",{children:"请求参数："})}),s.jsxs("ul",{children:[s.jsx("li",{children:"video: 上传的视频文件"}),s.jsx("li",{children:"category: 视频类别（car/person）"})]}),s.jsx("p",{children:s.jsx("strong",{children:"返回示例："})}),s.jsx("pre",{children:JSON.stringify({status:"success",message:"Video uploaded successfully",category:"car"},null,2)}),s.jsx("h2",{children:"2. 视频处理接口"}),s.jsxs("p",{children:[s.jsx("strong",{children:"接口路径："}),"/video"]}),s.jsxs("p",{children:[s.jsx("strong",{children:"请求方法："}),"POST"]}),s.jsx("p",{children:s.jsx("strong",{children:"请求参数："})}),s.jsxs("ul",{children:[s.jsx("li",{children:"video: 上传的视频文件"}),s.jsx("li",{children:"interval: 处理时间间隔（单位：毫秒）"})]}),s.jsx("p",{children:s.jsx("strong",{children:"返回示例："})}),s.jsx("pre",{children:JSON.stringify({processed_video_url:"https://example.com/video.mp4",pedestrian_counts:[20,30],vehicle_counts:[25,35]},null,2)}),s.jsx("h2",{children:"3. 视频流处理接口"}),s.jsxs("p",{children:[s.jsx("strong",{children:"接口路径："}),"/video-streaming"]}),s.jsxs("p",{children:[s.jsx("strong",{children:"请求方法："}),"POST"]}),s.jsx("p",{children:s.jsx("strong",{children:"请求参数："})}),s.jsxs("ul",{children:[s.jsx("li",{children:"video: 上传的视频文件"}),s.jsx("li",{children:"interval: 处理时间间隔（单位：毫秒，默认为250）"})]}),s.jsxs("p",{children:[s.jsx("strong",{children:"返回类型："}),"事件流"]}),s.jsx("h2",{children:"4. 人脸检测接口"}),s.jsxs("p",{children:[s.jsx("strong",{children:"接口路径："}),"/face-detect"]}),s.jsxs("p",{children:[s.jsx("strong",{children:"请求方法："}),"POST"]}),s.jsx("p",{children:s.jsx("strong",{children:"请求参数："})}),s.jsx("ul",{children:s.jsx("li",{children:"image: 上传的图像文件"})}),s.jsxs("p",{children:[s.jsx("strong",{children:"返回类型："}),"事件流"]}),s.jsx("h2",{children:"5. 车牌识别接口"}),s.jsxs("p",{children:[s.jsx("strong",{children:"接口路径："}),"/licence-plate"]}),s.jsxs("p",{children:[s.jsx("strong",{children:"请求方法："}),"POST"]}),s.jsx("p",{children:s.jsx("strong",{children:"请求参数："})}),s.jsx("ul",{children:s.jsx("li",{children:"licence_plate: 车牌号"})}),s.jsxs("p",{children:[s.jsx("strong",{children:"返回类型："}),"事件流"]}),s.jsx("h2",{children:"6. 获取所有视频信息接口"}),s.jsxs("p",{children:[s.jsx("strong",{children:"接口路径："}),"/get_videos_info"]}),s.jsxs("p",{children:[s.jsx("strong",{children:"请求方法："}),"GET"]}),s.jsx("p",{children:s.jsx("strong",{children:"返回示例："})}),s.jsx("pre",{children:JSON.stringify([{upload_time:"2024-07-13 12:00:00",file_name:"video.mp4",processing_status:1,category:"car"}],null,2)}),s.jsx("h2",{children:"7. 删除视频信息接口"}),s.jsxs("p",{children:[s.jsx("strong",{children:"接口路径："}),"/delete_video_data"]}),s.jsxs("p",{children:[s.jsx("strong",{children:"请求方法："}),"POST"]}),s.jsx("p",{children:s.jsx("strong",{children:"请求参数："})}),s.jsxs("ul",{children:[s.jsx("li",{children:"upload_time: 上传时间"}),s.jsx("li",{children:"file_name: 文件名"})]}),s.jsx("p",{children:s.jsx("strong",{children:"返回示例："})}),s.jsx("pre",{children:JSON.stringify({message:"删除成功"},null,2)}),s.jsx("h2",{children:"8. 添加用户接口"}),s.jsxs("p",{children:[s.jsx("strong",{children:"接口路径："}),"/add_user"]}),s.jsxs("p",{children:[s.jsx("strong",{children:"请求方法："}),"POST"]}),s.jsx("p",{children:s.jsx("strong",{children:"请求参数："})}),s.jsxs("ul",{children:[s.jsx("li",{children:"nickname: 用户昵称"}),s.jsx("li",{children:"password: 用户密码"}),s.jsx("li",{children:"email: 用户邮箱"}),s.jsx("li",{children:"role: 用户角色（可选，默认是 user）"})]}),s.jsx("p",{children:s.jsx("strong",{children:"返回示例："})}),s.jsx("pre",{children:JSON.stringify({message:"用户添加成功"},null,2)})]});export{r as default};
