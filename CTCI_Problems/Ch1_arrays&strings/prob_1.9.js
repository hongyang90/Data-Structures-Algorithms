function isRotation (str1, str2){
    if (str1.length !== str2.length && str1.length > 0){
        let word = str1+str1;
        return isSubstring(word, str2);
    }
    return false;

}