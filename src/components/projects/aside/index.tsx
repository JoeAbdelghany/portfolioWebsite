import React, { Component } from 'react';
import { IoSearch } from 'react-icons/io5';
class Aside extends Component {
  render() {
    const links: any[] = [

    ];
    return (
      <>
        <aside className="p-4 shadow rounded col-span-3 h-fit">
            <div className="grid gap-y-8">
              <form className="flex items-center justify-end relative">
                <input type="text" className="" spellCheck="false" />
                <button type="button" className="btn empty absolute"><IoSearch /></button>
              </form>
              <ul>
                {links.map( ({text, Icon}) => (<li className="flex gap-x-4"><Icon /> {text}</li>))}
              </ul>
            </div>
        </aside>
      </>
    )
  }
}

export default  Aside;