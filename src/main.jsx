import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// 图像检索相应内容
const SearchClassified = lazy(() => import('./component/search-text/App.jsx'));
const SearchGlobal = lazy(() => import('./component/search-global/App.jsx'));

const UploadApp = lazy(() => import('./component/upload/App.jsx'));
const UsersManagementApp = lazy(() => import('./component/users_management/App.jsx'));
const InterfaceDescriptionApp = lazy(() => import('./component/interface_description/App.jsx'));
const UsersAddApp = lazy(() => import('./component/users_add/App.jsx'));
const LicenceApp = lazy(() => import('./component/licence/App.jsx'));
const FaceApp = lazy(() => import('./component/face/App.jsx'));
const DataUploadApp = lazy(() => import('./component/data_upload/App.jsx'));
const DataManagementApp = lazy(() => import('./component/data_management/App.jsx'));
const TeamApp = lazy(() => import('./component/team/App.jsx'));
const AboutApp = lazy(() => import('./component/about/App.jsx'));

import Layout from './component/layout/Layout.jsx'

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Suspense fallback={<div>加载中………</div>}>
          <h1>跨模态Q群图片管家 🌟</h1>
          <p>随着社交平台的普及，尤其是QQ群聊中，用户共享的图片数量急剧增加 📸。这些图片种类繁多，从个人照片到新闻资讯、娱乐内容，应有尽有。然而，传统的图片管理和检索方式效率低下，尤其是在庞大的聊天记录中查找某一张特定图片时，往往需要手动翻阅，浪费大量时间⏳。</p>
          <p>本项目旨在解决这一痛点，利用<strong>CLIP模型</strong>的多模态对齐能力，结合<strong>FastAPI</strong>进行高效的后端开发，并通过<strong>Nonebot</strong>实现群聊机器人，提供智能化的图片检索和生成服务 🤖。</p>
          <p>核心功能包括：<br/>
            - <strong>文搜图</strong>：用户可以通过输入简单的文本描述来检索群聊历史中的图片 🔍。通过CLIP模型，系统能够理解文本与图片的关系，从而快速返回最匹配的图片。<br/>
            - <strong>文生图</strong>：用户输入文本描述后，系统能够生成与描述内容相符的图片 🖼️。此功能基于<strong>Stable Diffusion</strong>模型，通过FastAPI接口实现高效生成。<br/>
            - <strong>图生文</strong>：通过图像识别技术，系统可以生成图片的文本描述 📝，帮助用户更好地理解图片内容。<br/>
            - <strong>图片问答</strong>：结合自然语言处理与图像识别，用户可以向机器人提问关于图片内容的问题，机器人将提供相应的答案 📚。<br/>
          </p>
          <p>项目技术栈：<strong>FastAPI, Nonebot, CLIP, Stable Diffusion, MySQL, React</strong> 🧑‍💻🚀。</p>
          <p>通过这些功能，我们能够显著提升群聊中的图片管理效率，减少用户查找图片的时间，增加群聊的互动性和趣味性 🎉。无论是日常的图片管理，还是创意性的图像生成，智能机器人都能大大提升用户体验 ✨。</p>
        </Suspense>
      </Layout>
    ),
  },
  {
    path: "/upload",
    element: (
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <h2>📤📤📤上传文件</h2>
          <UploadApp />
        </Suspense>
      </Layout>
    ),
  },
  {
    path: "/licence-plate",
    element: (
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <h2>🚗🚗🚗车牌检索</h2>
          <h3>你可以输入车牌并检索，我们将进行匹配并输出结果</h3>
          <LicenceApp />
        </Suspense>
      </Layout>
    ),
  },
  {
    path: "/face-recognition",
    element: (
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <h2>🧔🏻🧔🏻🧔🏻人脸识别</h2>
          <h3>你可以上传一张人脸，我们将进行相似度搜索并展示所有结果</h3>
          <FaceApp />
        </Suspense>
      </Layout>
    ),
  },
  {
    path: "/text-search",
    element: (
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <SearchClassified />
        </Suspense>
      </Layout>
    ),
  },
  {
    path: "/text-search",
    element: (
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <SearchClassified />
        </Suspense>
      </Layout>
    ),
  },
  {
    path: "/global-search",
    element: (
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <h2>🫗🫗🫗全局群聊检索</h2>
          <h3>通过所有群，进行无缝衔接检索</h3>
          <SearchGlobal />
        </Suspense>
      </Layout>
    ),
  },
  {
    path: "/team",
    element: (
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <TeamApp />
        </Suspense>
      </Layout>
    ),
  },
  {
    path: "/data-upload",
    element: (
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <h2>🗂️🗂️🗂️数据上传</h2>
          <h3>上传如人脸，车牌等视频数据，我们将进行抽帧，并将数据处理后存储在数据库中</h3>
          <h3>请注意，上传的视频文件应该是mp4格式，由于处理时间较长，这里仅显示上传状态，具体处理状态请查看数据处理页面</h3>
          <DataUploadApp />
        </Suspense>
      </Layout>
    ),
  },
  {
    path: "/data-management",
    element: (
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <h2>👩🏻‍🏭👩🏻‍🏭👩🏻‍🏭数据管理</h2>
          <h3>查看已经上传了的数据的处理状态，如果处理完成则显示处理成功，处理失败则显示处理失败，处理中则显示处理中</h3>
          <DataManagementApp />
        </Suspense>
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <AboutApp />
        </Suspense>
      </Layout>
    ),
  },
  {
    path: "/users-management",
    element: (
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <h2>🤣🤣🤣管理账户</h2>
          <h3>对于已有的账户进行管理，由于时间限制仅仅进行了有限的鉴权，比如上传和删除数据，其他功能无影响</h3>
          <UsersManagementApp />
        </Suspense>
      </Layout>
    ),
  },
  {
    path: "/users-add",
    element: (
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <h2>😖😖😖添加账户</h2>
          <h3>对于已有的账户进行添加，由于时间限制仅仅进行了有限的鉴权，比如上传和删除数据，其他功能无影响</h3>
          <UsersAddApp />
        </Suspense>
      </Layout>
    ),
  },
  {
    path: "/interface-description",
    element: (
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <h2>😖😖😖接口说明</h2>
          <h3>本页面对于本站涉及到的接口进行介绍</h3>
          <InterfaceDescriptionApp />
        </Suspense>
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
