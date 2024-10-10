import {defineConfig} from "vite";
import checker from "vite-plugin-checker";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [checker({typescript: true}), react()],
    base: '/https://github.com/El-Mito-de-Giralda/el-mito-de-giralda.github.io.git/',
});