import React from 'react';

const ary = [<p>1</p>, <p>2</p>, <p>3</p>]//jsx自动展开数组
const persons=[{id:1,name:'章三',age:20},{id:2,name:'章三1',age:230},{id:3,name:'章三2',age:220}]
class Basic extends React.Component{
    render () {
        return <div name="hello">
            {/* <img src={User.name}/> */}
            {/* 类名使用className */}
            <p className="rounded">{ary}</p>
            {/* jsx中使用三元运算 */}
            {1 ? <div>aaaa</div> : null}
            {persons.map(persons => <li key={persons.id}>{persons.name} {persons.age}</li>)}
            </div>
    }
}
export default  Basic