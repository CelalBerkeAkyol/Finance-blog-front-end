import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewPost } from "../../../../app/features/blogs/postsSlice";
import { Input, Textarea, Button } from "@nextui-org/react";
import CategorySelector from "./CategorySelector";

const AddPost = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewPost(formData));
    setFormData({ title: "", content: "", category: "" });
  };
  const handleCategoryChange = (selectedCategory) => {
    setFormData((prevData) => ({ ...prevData, category: selectedCategory }));
  };

  return (
    <div className="p-8 w-[80%]">
      <h2 className="text-xl font-bold mb-4">Yeni Post Ekle</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          clearable
          label="Başlık"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <Textarea
          clearable
          label="İçerik"
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
        />
        <CategorySelector
          selectedCategory={formData.category} // Bağlantı kuruldu
          onChange={handleCategoryChange}
        />
        <Button type="submit" color="success">
          Ekle
        </Button>
      </form>
    </div>
  );
};

export default AddPost;
