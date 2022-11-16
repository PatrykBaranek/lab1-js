// <!-- Rendering component -->
// 			<!-- <form>
// 				<div>
// 					<input type="text" name="add-note" id="add-note" />
// 					<label for="add-note"></label>
// 				</div>
// 				<button>Add Note</button>
// 			</form> -->
// Create render method which show pop-up component with adding or editing note inputs
export const render = () => {
    const menuDivContainer = document.querySelector('.menu-container');
    const formElement = document.createElement('form');
    const divElement = document.createElement('div');
    const inputElement = document.createElement('input');
    const labelElmenet = document.createElement('label');
    const buttonElement = document.createElement('button');
    labelElmenet.setAttribute('for', 'add-note');
    formElement.append(divElement);
    labelElmenet.appendChild(inputElement);
    divElement.append(labelElmenet);
    buttonElement.textContent = 'Add Note';
    formElement.appendChild(buttonElement);
    menuDivContainer.appendChild(formElement);
};
