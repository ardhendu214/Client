module.exports = ({ profilePicSrc }) => {
    if (profilePicSrc.startsWith("http")) return profilePicSrc;
    return `${process.env.REACT_APP_API_URL}/default_images/${profilePicSrc}`;
};
