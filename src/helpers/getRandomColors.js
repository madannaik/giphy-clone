
// Random colors for gif background
const color = {
    1: "rgb(0, 204, 255)",
    2: "  rgb(230, 70, 182)",
    3: "rgb(153, 51, 255)",
    4: "rgb(255, 249, 170)",
    5: " rgb(0, 255, 153)",
    6: " rgb(0, 204, 255)",
}
export const randomColor = () => {
    let random = Math.floor(Math.random() * (6 - 1) + 1);
    return color[random];
}