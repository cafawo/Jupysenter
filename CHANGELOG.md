# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [1.0.5] - 2025-09-29
### Added
- macOS-specific keybindings for presenter remotes (e.g. Logitech R500):
  - Forward button (Right Arrow) → Focus next cell and scroll
  - Back button (Left Arrow) → Focus previous cell and scroll
- Keybindings are scoped to Jupyter Notebooks (`.ipynb`) and only active when the notebook shell is focused (not when typing inside a cell or in an input box).

### Improved
- Safer conditions for keybindings to avoid hijacking keys when editing code or other inputs.

## [1.0.4] - 2023-XX-XX
### Added
- Initial release of **Jupysenter**.
- Navigate notebooks with **PageDown** (next cell) and **PageUp** (previous cell).
- Automatic scrolling to keep the active cell at the top.
