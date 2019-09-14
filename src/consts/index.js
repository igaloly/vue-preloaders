import sassConsts from './index.scss'
let { loaderClassName, transitionDuration } = sassConsts;
transitionDuration = parseInt(transitionDuration)

const consts = {
    loaderName: 'Preloaders',
    loaderInjectName: loaderClassName,
    loaderVariableName: '$' + loaderClassName,
    loaderClassName,
    transitionDuration
}

export default consts
