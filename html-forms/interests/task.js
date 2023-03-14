function checkParents(checkbox) {
	const parentBranch = checkbox.closest('ul.interests')
if (parentBranch) {
		const siblings = Array.from(parentBranch.children)
		.map(item=>item.querySelector('input'));
		const some = siblings.some(item=>item.checked || item.indeterminate);
		const every = siblings.every(item=>item.checked);
		
		const parentCheckbox = parentBranch.closest('.interest')
		.querySelector('input');

		parentCheckbox.checked = every;
		parentCheckbox.indeterminate = !every && every !== some;
		checkParents(parentCheckbox)
	}
}
function toggle(checkbox) {
	const branch = checkbox.closest('.interest')
	.querySelector('.interests');
	
	if (branch) {
		branch.querySelectorAll('input')
		.forEach(item=>{
			item.checked=checkbox.checked;
			item.indeterminate = false;
		})
	}
	checkParents(checkbox)
}

document.querySelectorAll('.interest__check')
.forEach(el=>el.addEventListener('change', e=>toggle(e.target)));
