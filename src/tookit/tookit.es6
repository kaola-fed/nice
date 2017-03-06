export let replaceEmail = (result) => {
    return result.replace(/\@corp\.netease\.com/i, '')
};

export let isInLibs = (libs, item) => {
    return libs.filter(lib => ((item === lib) || item.startsWith(`${lib}/`))).length > 0;
};