module.exports = ({ previewImgSrc }) => {
    if (previewImgSrc.startsWith("http")) return previewImgSrc;
    return `${process.env.REACT_APP_API_URL}/bookimage/${previewImgSrc}`;
};
