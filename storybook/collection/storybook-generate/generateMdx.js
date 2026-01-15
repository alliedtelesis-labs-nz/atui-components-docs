import * as fs from "fs";
import * as path from "path";
const searchForFiles = (dir, fileName, filePaths) => {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const fileStat = fs.statSync(filePath);
        if (fileStat.isDirectory()) {
            searchForFiles(filePath, fileName, filePaths);
        }
        else if (file.endsWith(fileName)) {
            filePaths.push(filePath);
        }
    }
};
const formatFilename = (filename) => {
    return filename
        .split('-')
        .map((word) => `${word[0].toUpperCase()}${word.substring(1)}`)
        .join(' ');
};
const componentDirectory = path.resolve(path.join(import.meta.dirname, '..', 'components'));
const filePaths = [];
searchForFiles(componentDirectory, '.tsx', filePaths);
filePaths.forEach((filePath) => {
    fs.access(`${path.dirname(filePath)}/readme.md`, (err) => {
        if (!err) {
            const componentName = formatFilename(path.basename(filePath).slice(5, -4));
            const displayPath = path
                .relative('../components', path.dirname(filePath))
                .split('/')
                .slice(0, -1)
                .map((name) => `${formatFilename(name.replace('at-', ''))}/`)
                .join('');
            const filename = filePath.replace('.tsx', '.mdx');
            fs.writeFile(filename, `import { Meta } from '@storybook/blocks';
import { MermaidMarkdown } from '${path.relative(path.dirname(filePath), '../../.storybook')}/blocks/MermaidMarkdown';
import readme from './readme.md?raw';

<Meta title="Components/${displayPath.length ? `${displayPath}${componentName}/` : ''}${componentName}" />

<MermaidMarkdown md={readme}></MermaidMarkdown>
`, (error) => {
                if (error)
                    console.error(error);
                else
                    console.log(`${componentName} success`);
            });
        }
    });
});
