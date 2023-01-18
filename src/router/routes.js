import Home from "@/views/Home";
import About from "@/views/About";
import Project from "@/views/Project";
import Blog from "@/views/Blog";
import Message from "@/views/Message";
import BlogDetail from "@/views/Blog/Detail";

export default [
  { name: "Home", path: "/", component: Home },
  { name: "About", path: "/about", component: About },
  { name: "Project", path: "/project", component: Project },
  { name: "Blog", path: "/blog", component: Blog },
  { name: "CategoryBlog", path: "/blog/cate/:categoryId", component: Blog },
  { name: "BlogDetail", path: "/blog/:id", component: BlogDetail },
  { name: "Message", path: "/message", component: Message },
];
