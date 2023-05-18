import React from "react";

const MidDiv = (divinfo) => {
  var taglist = new Map();
  for (let tag of divinfo.tags) {
    taglist.set(tag.tid, tag.name);
  }
  return (
    <div id="midDiv">
      <div id="titleDiv" onClick={() => this.titleclick(test)}>
        {divinfo.title}
      </div>
      <div id="tagDiv">
        {divinfo.tagIds.map((id) => (
          <li key={id}>{taglist.get(id)}</li>
        ))}
      </div>
    </div>
  );
};

export default MidDiv;
