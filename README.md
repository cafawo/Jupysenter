# Jupysenter

**Jupysenter** enhances the presentation of Jupyter Notebooks in VS Code by enabling smooth navigation using wireless presenter tools — ideal for teaching or presenting in lecture halls.

---

## ✨ Features

- Seamless notebook navigation with `PageUp` / `PageDown`
- Each cell (code or markdown) is scrolled into view and aligned to the top of the viewport
- Works great with common presenter remotes (e.g., Logitech R400)

---

## 🚀 How to Use

When teaching at university, I needed a way to **present Jupyter Notebooks like slides (e.g., with RISE)** — while retaining **full interactivity** and the ability to **edit and execute code on the fly**.

Jupysenter modifies the behavior of the Up/Down (PageUp/PageDown) keys in VS Code notebooks:

- Each press moves focus to the next/previous cell (markdown or code)
- The selected cell is auto-scrolled to the top of the screen for better visibility

This enables a presentation-like experience while maintaining the full power of interactive notebooks.

### 📏 Presentation Tip

Because display space is limited, design your notebooks like slides:

- Keep cells short and focused
- Separate **code** and **output** into different cells to ensure visibility

For example, a code cell:

```python
fig = plt.figure()
plt.plot([1, 2, 3])
plt.close(fig)  # No need to open fig twice
```

Followed by a (separate) output/display cell:
```python
display(fig)  # Open fig in new cell
```


## 🛠️ Alternatives / Manual Setup

You can achieve something similar using the custom keybindings below (in VS Code Shift+Ctrl+P). However, Jupysenter goes a step further by also scrolling the cell into view at the top of the screen — making it ideal for hands-free navigation with presenter tools.

```json
// Place in keybindings.json
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



