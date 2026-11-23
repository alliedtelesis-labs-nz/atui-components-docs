function closestCustomElementAbove(node) {
    let ancestor = node.parentElement;
    while (ancestor && !ancestor.tagName.includes('-')) {
        ancestor = ancestor.parentElement;
    }
    return ancestor;
}
function slottedLabelId(host, idForUnnamedLabel) {
    const slottedLabel = Array.from(host.querySelectorAll('[slot="label"]')).find((candidate) => closestCustomElementAbove(candidate) === host);
    if (!slottedLabel)
        return undefined;
    if (!slottedLabel.id) {
        slottedLabel.id = idForUnnamedLabel;
    }
    return slottedLabel.id;
}

export { slottedLabelId as s };
