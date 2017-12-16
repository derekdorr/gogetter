## Classes

<dl>
<dt><a href="#GoGetter">GoGetter</a></dt>
<dd><p>The GoGetter class exposes methods for GET, POST, PUT, DELETE</p>
</dd>
<dt><a href="#XHR">XHR</a></dt>
<dd><p>Generate an XHR of type GET, POST, PUT, DELETE</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#win">win()</a> ⇒ <code>Window</code> | <code>Object</code></dt>
<dd><p>Returns window, global, or object if exists (in that order);</p>
</dd>
</dl>

<a name="GoGetter"></a>

## GoGetter
The GoGetter class exposes methods for GET, POST, PUT, DELETE

**Kind**: global class  
**Hideconstructor**:   
**Since**: 1.0.0  

* [GoGetter](#GoGetter)
    * [new GoGetter()](#new_GoGetter_new)
    * [.get(uri, options)](#GoGetter.get) ⇒ <code>Promise</code>
    * [.post(uri, body, options)](#GoGetter.post) ⇒ <code>Promise</code>
    * [.put(uri, body, options)](#GoGetter.put) ⇒ <code>Promise</code>
    * [.delete(uri, options)](#GoGetter.delete) ⇒ <code>Promise</code>

<a name="new_GoGetter_new"></a>

### new GoGetter()
Exposes GoGetter request methods

<a name="GoGetter.get"></a>

### GoGetter.get(uri, options) ⇒ <code>Promise</code>
**Kind**: static method of <code>[GoGetter](#GoGetter)</code>  

| Param | Type |
| --- | --- |
| uri | <code>string</code> | 
| options | <code>Object</code> | 

<a name="GoGetter.post"></a>

### GoGetter.post(uri, body, options) ⇒ <code>Promise</code>
**Kind**: static method of <code>[GoGetter](#GoGetter)</code>  

| Param | Type |
| --- | --- |
| uri | <code>string</code> | 
| body | <code>Object</code> &#124; <code>string</code> | 
| options | <code>Object</code> | 

<a name="GoGetter.put"></a>

### GoGetter.put(uri, body, options) ⇒ <code>Promise</code>
**Kind**: static method of <code>[GoGetter](#GoGetter)</code>  

| Param | Type |
| --- | --- |
| uri | <code>string</code> | 
| body | <code>Object</code> &#124; <code>string</code> | 
| options | <code>Object</code> | 

<a name="GoGetter.delete"></a>

### GoGetter.delete(uri, options) ⇒ <code>Promise</code>
**Kind**: static method of <code>[GoGetter](#GoGetter)</code>  

| Param | Type |
| --- | --- |
| uri | <code>string</code> | 
| options | <code>Object</code> | 

<a name="XHR"></a>

## XHR
Generate an XHR of type GET, POST, PUT, DELETE

**Kind**: global class  
**Since**: 1.0.0  

* [XHR](#XHR)
    * [new XHR(method)](#new_XHR_new)
    * [.body(message)](#XHR+body) ⇒ <code>[XHR](#XHR)</code>
    * [.uri(url)](#XHR+uri) ⇒ <code>[XHR](#XHR)</code>
    * [.timeout(time)](#XHR+timeout) ⇒ <code>[XHR](#XHR)</code>
    * [.send()](#XHR+send) ⇒ <code>Promise</code>

<a name="new_XHR_new"></a>

### new XHR(method)
Manages XHRs


| Param | Type |
| --- | --- |
| method | <code>string</code> | 

<a name="XHR+body"></a>

### xhR.body(message) ⇒ <code>[XHR](#XHR)</code>
Update body for request

**Kind**: instance method of <code>[XHR](#XHR)</code>  

| Param | Type |
| --- | --- |
| message | <code>Object</code> &#124; <code>string</code> | 

<a name="XHR+uri"></a>

### xhR.uri(url) ⇒ <code>[XHR](#XHR)</code>
Update uri for request

**Kind**: instance method of <code>[XHR](#XHR)</code>  

| Param | Type |
| --- | --- |
| url | <code>string</code> | 

<a name="XHR+timeout"></a>

### xhR.timeout(time) ⇒ <code>[XHR](#XHR)</code>
Update timeout for request

**Kind**: instance method of <code>[XHR](#XHR)</code>  

| Param | Type |
| --- | --- |
| time | <code>number</code> | 

<a name="XHR+send"></a>

### xhR.send() ⇒ <code>Promise</code>
Make XHR request

**Kind**: instance method of <code>[XHR](#XHR)</code>  
<a name="win"></a>

## win() ⇒ <code>Window</code> &#124; <code>Object</code>
Returns window, global, or object if exists (in that order);

**Kind**: global function  
**Since**: 1.0.0  
