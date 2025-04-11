# Jupysenter

This extension is similar to (Shift+Ctrl+P in VS Code)

```
// Place your key bindings in this file to override the defaults
[
    {
        "key": "pagedown",
        "command": "notebook.focusNextEditor",
        "when": "notebookEditorFocused"
    },
    {
        "key": "pageup",
        "command": "notebook.focusPreviousEditor",
        "when": "notebookEditorFocused"
    }    
]
```

However, it also shifts code cells into view using page up/down. You can therefore use your handheld presenter tool while paging through a Jupyter notebook in VS Code.