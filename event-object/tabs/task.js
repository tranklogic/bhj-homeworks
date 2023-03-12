class Tabs {
	constructor(container, props) {
		this.props = Object.assign({
			tabListSelector: '[role="tablist"]',
			tabSelector: '[role="tab"]',
			panelSelector: '[role="tabpanel"]',
			activeTabClass: 'tab_active',
			activePanelClass: 'tab__panel_active'
		}, props)
		this.toggle = this.toggle.bind(this);
		this.container = document.querySelector("#tabs1");
		this.tabList = this.container.querySelector(this.props.tabListSelector);
		this.tabs = Array.from(this.container.querySelectorAll(this.props.tabSelector));
		this.panels = Array.from(this.container.querySelectorAll(this.props.panelSelector));
		this.tabList.addEventListener("click", this.toggle);
		// Позаботимся о скринридерах.
		// Без ролей скринридер не поймёт, что это табы!
		!this.tabList.role && this.tabList.setAttribute('role', 'tablist');
		this.tabs.map(el=>!el.role && el.setAttribute('role', 'tab'));
		this.panels.map(el=>!el.role && el.setAttribute('role', 'tabpanel'))
		// Так скринридер видит, что вкладка выбрана
		const current = this.tabList.querySelector('.' + this.props.activeTabClass);
		current && current.setAttribute('aria-selected', 'true');
	}

	toggle(e) {
		const index = this.tabs.indexOf(e.target),
		currentTab = this.tabList.querySelector('.' + this.props.activeTabClass),
		currentPanel = this.container.querySelector('.' + this.props.activePanelClass);
		
		if (e.target === currentTab || e.target.role !== 'tab') {
			return
		}
		currentPanel.classList.remove(this.props.activePanelClass)
		currentTab.classList.remove(this.props.activeTabClass)
		currentTab.removeAttribute('aria-selected');
		
		this.panels[index].classList.add(this.props.activePanelClass)
		e.target.classList.add(this.props.activeTabClass)
		e.target.setAttribute('aria-selected', 'true');
	}
}

const tabs1 = new Tabs('#tabs1', {
tabListSelector: '.tab__navigation',
	tabSelector: '.tab',
	panelSelector: '.tab__content',
	activeTabClass: 'tab_active',
	activePanelClass: 'tab__content_active'
})
