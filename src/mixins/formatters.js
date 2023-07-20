export default {
	methods: {
		getCoolDateFormat(strDate) {
			return new Date(strDate).toLocaleDateString('en-us',
				{ weekday: "long", year: "numeric", month: "short", day: "numeric" }
			)
		},
	},
};
