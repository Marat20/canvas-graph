import {
    cssFunc
} from "./utils";

const template = (data) => `
  <div class="tooltip-title">${data.title}</div>
  <ul class="tooltip-list">
    ${data.items
      .map((item) => {
        return `<li class="tooltip-list-item">
        <div class="value" style="color: ${item.color}">${item.value}</div>
        <div class="name" style="color: ${item.color}">${item.name}</div>
      </li>`
      })
      .join('\n')}
  </ul>
`

export const tooltip = (el) => {
    const clear = () => el.innerHTML = '';

    return {
        show({
            left,
            top
        }, data) {
            clear();

            cssFunc(el, {
                display: 'block',
                // top: top - height + 'px',
                // left: left + width / 2 + 'px',
            })
            el.insertAdjacentHtml('afterbegin', template(data))
        },
        hide() {
            cssFunc(el, {
                display: 'none'
            })
        }
    }
}