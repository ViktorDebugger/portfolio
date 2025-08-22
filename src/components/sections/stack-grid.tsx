import { stack } from "../../utils/data-stack";
import SkillItem from "../specials/stack-item";
import CategoriesMenu from "../specials/categories-menu";
import { useState } from "react";

const StackGrid = () => {
  const [category, setCategory] = useState("All");
  const [list, setList] = useState(stack);

  const handleFilter = (name: string) => {
    setCategory(name);
    let newList = stack;
    if (name !== "All") {
      newList = newList.filter(({ categories }) => categories.includes(name));
    }
    setList(newList);
  };

  return (
    <section className="mx-auto max-w-[1440px] py-16">
      <div className="flex flex-col items-center text-center">
        <CategoriesMenu category={category} handler={handleFilter} />

        <ul className="mt-8 flex w-full flex-wrap justify-center gap-6">
          {list.map(
            ({
              id,
              name,
              image,
              categories,
              description,
              skills,
              documentation,
              learningLevel,
            }) => (
              <SkillItem
                key={id}
                name={name}
                image={image}
                categories={categories}
                description={description}
                skills={skills}
                documentation={documentation}
                learningLevel={learningLevel}
              />
            ),
          )}
        </ul>
      </div>
    </section>
  );
};

export default StackGrid;
