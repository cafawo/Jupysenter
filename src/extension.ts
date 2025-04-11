import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const scrollToCell = async (direction: 'next' | 'previous') => {
    const editor = vscode.window.activeNotebookEditor;
    if (!editor) {
      return;
    }

    const selection = editor.selections[0];
    const currentIndex = selection?.start ?? 0;
    const cells = editor.notebook.getCells();

    const targetIndex = direction === 'next'
      ? Math.min(cells.length - 1, currentIndex + 1)
      : Math.max(0, currentIndex - 1);

    editor.selections = [new vscode.NotebookRange(targetIndex, targetIndex)];
    editor.revealRange(
      new vscode.NotebookRange(targetIndex, targetIndex),
      vscode.NotebookEditorRevealType.Default
    );
  };

  context.subscriptions.push(
    vscode.commands.registerCommand('extension.focusNextCellAndScroll', () => scrollToCell('next')),
    vscode.commands.registerCommand('extension.focusPreviousCellAndScroll', () => scrollToCell('previous'))
  );
}
