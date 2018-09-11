const actualPage = (pathname) => {  
    while(pathname[pathname.length - 1] === '/') {
        pathname = pathname.slice(0, pathname.length - 1);
    }   
    const title = pathname.slice(pathname.lastIndexOf('/') + 1).replace(/\b\w/g, l => l.toUpperCase())  
    return title
}

export {
   actualPage
}
