<template>
	<v-container>
		<v-row>
			<v-col cols="12" md="4">
				<v-card class="mx-auto">
					<v-img height="300" src="@/assets/imgs/me.jpg"></v-img>

					<v-card-title>Hanz Danilo Gallego Lara</v-card-title>

					<v-card-text>
						<v-row>
							<v-col v-for="item, index in myAttrs" cols="12" class="text-md" :key="index">
								<v-icon aria-hidden="false">
									{{ item.icon }}
								</v-icon> <b>{{ item.title }}:</b> <a v-if="item.is_link" :href="item.attr">{{ item.attr
								}}</a> <span v-else>{{ item.attr }}</span>
							</v-col>
						</v-row>
					</v-card-text>
				</v-card>
			</v-col>
			<v-col cols="12" md="8">
				<h3 class="text-5xl mb-6 rounded border-b-2 border-yellow-300">Planet description</h3>
				<p class="mb-4">
					During my professional experience as a backend developer, I have gained valuable expertise in Python.
					Over the course of one and a half years, I had the opportunity to contribute to various projects that
					highlight my proficiency in Python programming. <br><br>

					One of my notable contributions involved developing CRMs for blogs, leveraging Python to create
					efficient and user-friendly systems. Additionally, I utilized Python to create web scrapers, allowing
					the extraction and analysis of data from different sources. These scrapers played a crucial role in
					gathering relevant information for further processing. <br><br>

					Another remarkable project I worked on involved integrating face recognition technology into an online
					testing platform. This integration aimed to enhance fraud prevention by verifying the identities of
					candidates during their test sessions. Python proved to be a powerful tool in implementing this feature,
					ensuring the security and integrity of the testing process. <br><br>

					Throughout my professional journey, I have honed my skills in Python development, utilizing it for
					diverse tasks such as backend development, data extraction, and integration of advanced technologies. I
					continue to stay updated with the latest advancements in Python and eagerly embrace new challenges that
					come my way.
				</p>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: 'AboutView',
	data() {
		return {
			myAttrs: [
				{ attr: 'Male', icon: 'mdi-gender-male', title: 'Gender' },
				{ attr: 24, icon: 'mdi-cake-variant-outline', title: 'Age' },
				{ attr: 'hdgl.9914@gmail.com', icon: 'mdi-email-outline', title: 'Email' },
				{ attr: 'https://www.linkedin.com/in/hanzgallego/', icon: 'mdi-linkedin', title: 'Linked In', is_link: true },
				{ attr: 'https://github.com/HanzDa', icon: 'mdi-github', title: 'Gitgub', is_link: true },
				{ attr: 'Rionegro - Antioquia - Colombia', icon: 'mdi-map-marker-radius', title: 'Location' },
			]
		}
	},
}
</script>