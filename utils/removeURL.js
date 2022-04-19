/**
 * 
 * @param {String} url
 * @returns 
 */
function removeUrlCharachter(url) {
    return url.replace('http://', '').replace('https://', '').replace('www.', '').replace('.com', '').replace('.ir', '');
}


module.exports = removeUrlCharachter

