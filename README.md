# jquery-ajaxProgress-plugin

# jquery上传进度条插件

### 可以自定义url路径和完成或失败的回调函数，点击绑定的元素后，点击选择文件后会自动弹出进度条显示当前进度

```javascript
$('button').showProgressBar({
        url:'https://www.google.com',  //上传的url
        onSuccess: function() {   //成功回调
            alert('success');
        },
        onError: function() {   //失败回调
            alert("error");
        }
});
```
插件增加了对url的验证，当验证失败时自动返回，这是我第一个开发jquery插件，目的是了解和掌握jquery插件的开发原理。
