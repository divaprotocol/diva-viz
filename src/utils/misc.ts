function isUrl(str) {
    const urlRegex = /^(?:https?|ftp):\/\/(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}|localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?::\d+)?(?:\/[^\s]*)?$/;
    return urlRegex.test(str);
}

export { isUrl }