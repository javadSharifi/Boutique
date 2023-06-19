import React from 'react'
import Checkbox from 'shared/Checkbox';
import Collapse from 'shared/Collapse';

function Category() {
  return (
    <Collapse value={true} title="دسته بندی">
      <div className="space-y-3">
        <Checkbox name="شلوار " />
        <Checkbox name="هودی" />
        <Checkbox name="بلیز" />
        <Checkbox name="کفش زنانه" />
        <Checkbox name="کفش مردانه" />
      </div>
    </Collapse>
  );
}

export default Category