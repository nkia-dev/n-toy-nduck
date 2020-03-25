import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.less'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { LocaleProvider } from 'antd'
import koKR from 'antd/lib/locale-provider/ko_KR'
import enUS from 'antd/lib/locale-provider/en_US'
import { createStore } from 'redux'
import { i18nClient } from './i18n'
import App from './App'
import * as serviceWorker from './serviceWorker'
import counterApp from './redux/reducers'

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
    const store = createStore(counterApp)
    rootElement.style.height = '100%'
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer>
                <LocaleProvider
                    locale={antResources[i18nClient.language]}
                    store={store}
                >
                    <Component />
                </LocaleProvider>
            </AppContainer>
        </Provider>,
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
