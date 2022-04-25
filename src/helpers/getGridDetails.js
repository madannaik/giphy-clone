export const getgridDetails = (gridRef, src, index) => {

    // check for number of rows
    let clientWidth = document.documentElement.clientWidth;
    let { rows, width } = getRows(clientWidth)
    gridRef.calcHeight = width;
    let num = (index % rows)
    num === 0 ? gridRef.width = 0 : gridRef.width = gridRef.width + width + 16;
    let oldheight = gridRef.height[num];
    gridRef.height[num] +=
        parseInt(src.images['480w_still'].height) >= 400 ? 400 + 20 :
            parseInt(src.images['480w_still'].height) + 20;
    return oldheight;
}

const getRows = (width) => {
    if (width < 600) {
        return { rows: 2, width: (width / 2) - 8 };
    }
    else if (width > 600 && width < 1040) {
        return { rows: 3, width: (width / 3) - 12 };
    }
    else if (width > 1040) {
        return { rows: 4, width: 248 };;
    }
} 