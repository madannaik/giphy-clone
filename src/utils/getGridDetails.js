export const getgridDetails = (gridRef, src, index) => {

    // check for number of rows
    let num = (index % 4)
    num === 0 ? gridRef.width = 0 : gridRef.width += 264
    let oldheight = gridRef.height[num];
    gridRef.height[num] +=
        parseInt(src.images['480w_still'].height) >= 400 ? 400 + 20 :
            parseInt(src.images['480w_still'].height) + 20;
    return oldheight;
}