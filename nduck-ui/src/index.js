import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.less'
import { AppContainer } from 'react-hot-loader'
import { ConfigProvider } from 'antd'
import koKR from 'antd/lib/locale-provider/ko_KR'
import enUS from 'antd/lib/locale-provider/en_US'
import { i18nClient } from './i18n'
import App from './App'
import * as serviceWorker from './serviceWorker'

const antResources = {
    ko: koKR,
    'ko-KR': koKR,
    en: enUS,
    'en-US': enUS,
}

const root = document.createElement('div')
root.id = 'root'
document.body.appendChild(root)

const render = Component => {
    const rootElement = document.getElementById('root')
    rootElement.style.height = '100%'
    ReactDOM.render(
        <AppContainer>
            <ConfigProvider locale={antResources[i18nClient.language]}>
                <Component />
            </ConfigProvider>
        </AppContainer>,
        rootElement,
    )
}

render(App)
if (module.hot) {
    module.hot.accept('./App', () => {
        render(App)
    })
}

serviceWorker.unregister()
