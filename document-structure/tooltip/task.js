const links = Array.from(document.querySelectorAll('.has-tooltip'));

function createTooltip(element, tooltipText, top, left) {
    let toolTip = `<div class="tooltip tooltip_active" style="left: ${left}px; top: ${top}px">
    ${tooltipText}
    </div>`;

    element.insertAdjacentHTML('afterend', toolTip);
};

function getCoords(element) {
    let elemBox = element.getBoundingClientRect();

    return {
        top: elemBox.top + 30,
        left: elemBox.left
    };
}

function removeAll() {
    for (link of links) {
        if (link.nextElementSibling) {
            if (link.nextElementSibling.classList.contains('tooltip_active')) {
                link.nextElementSibling.remove();
            }
        }
    }
};

for (link of links) {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        let coords = getCoords(this);

        if (this.nextElementSibling) {
            if (this.nextElementSibling.classList.contains('tooltip_active')) {
                this.nextElementSibling.remove();
            } else {
                removeAll();
                createTooltip(this, this.title, coords.top, coords.left);
            }
        } else {
            const activeTooltips = document.querySelectorAll('.tooltip_active');
            if (activeTooltips.length != 0) {
                removeAll();
                createTooltip(this, this.title, coords.top, coords.left);
            } else {
                createTooltip(this, this.title, coords.top, coords.left);
            }
        }  
    });
};