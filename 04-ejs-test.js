const ejs = require('ejs')

const str = `
    今年我<%= age %>岁
    我会:
        <% for(var i = 0; i < skill.length; i++) { %>
            <%= skill[i] %>
        <% } %>
`

const newStr = ejs.render(str, { age: 18, skill: ['唱', '跳', 'rap'] })

console.log(newStr);