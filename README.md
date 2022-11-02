# @levakorg/init

File environment levakorg org's

**1. Using script**

```
npx @levakorg/init templateName templateDescription
```

**2. Other arguments**

- **templateName**, **templateDescription** - `required first arguments`
  - string
- **--use-package**
  - "script" | "package" | "project" or boolean
  - default - `"project"`
- **--use-license**
  - boolean
  - default `true` on "script" & "package", default `false` on "project"
- **--use-readme**
  - boolean
  - default `true` on "script" & "package", default `false` on "project"
- **--use-todo**
  - boolean
  - default `true` on "script" & "package", default `false` on "project"
- **--use-changelog**
  - boolean
  - default `true` on "script" & "package", default `false` on "project"
- **--use-env**
  - boolean
  - default `true` on "project", default `false` on "script" & "package"
- **--use-gitignore**
  - boolean
  - default `true` on "script" & "package" & "project"
- **--use-editorconfig**
  - boolean
  - default `true` on "script" & "package" & "project"
- **--use-prettier**
  - boolean
  - default `true` on "script" & "package" & "project"
- **--use-stylelint**
  - "css" | "less" | "scss" | "sass" | "stylus" | "styled-components" | "total" or boolean
  - default `css` on "project", default `false` on "script" & "package"
- **--use-eslint**
  - "javascript" | "typescript" | "node" | "react" | "react-native" | "angular" | "vue" | "svelte" or boolean
  - default `javascrip` on "script" & "package" & "project"
