export const isExist = (condition, returnIsFalse) => {
    if (condition)
        return condition
    else
        return returnIsFalse
}

export const findBanner = (banner, conditionalState) => {
    if (banner)
        return banner.find(banner => banner.mobile === conditionalState)
    else
        return ''
}

export const getUrlBanner = banner => {
    if (banner)
        return process.env.REACT_APP_DOMAIN_FRONT + banner.url
    else
        return ""
}
