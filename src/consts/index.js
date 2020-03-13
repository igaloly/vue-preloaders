import sassConsts from './index.scss'
let { loaderClassName } = sassConsts;

const consts = {
    loaderName: 'Preloaders',
    loaderInjectName: loaderClassName,
    loaderVariableName: '$' + loaderClassName,
    loaderClassName,
}

export default consts
