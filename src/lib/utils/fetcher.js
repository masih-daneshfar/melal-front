export const fetcher = async (url, params) => {
    const urlParams = new URLSearchParams(
        {...params}
    )
    
    try {
        const request = await fetch(`https://polino.m0nalisa.com${url}?${urlParams}`, { method: 'get' , mode:'no-cors', credentials:'include'});
        return request.json();
    }
    catch (err) {
        return {message:String(err)}
    }
}