const store = Redux.createStore(moodReducer)

const face = document.querySelector("#face")

document.querySelector("#happy").addEventListener("click", () => {
    store.dispatch({ type: "MOOD_HAPPY", payload: '٩(◕‿◕｡)۶' });
});

document.querySelector("#sad").addEventListener("click", () => {
    store.dispatch({ type: "MOOD_SAD", payload: '(ಥ﹏ಥ)' });
});

document.querySelector("#angry").addEventListener("click", () => {
    store.dispatch({ type: "MOOD_ANGRY", payload: '٩(ఠ益ఠ)۶' });
});

document.querySelector("#confused").addEventListener("click", () => {
    store.dispatch({ type: "MOOD_CONFUSED", payload: 'ლ(ಠ_ಠ ლ)' });
});

function renderFace() {
    face.innerHTML = store.getState().face;
}

renderFace()
store.subscribe(renderFace);
