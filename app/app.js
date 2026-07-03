$(function () {

    console.log("App Started.....");
	
	
    $("#generateConfig").on("click", function () {

		const title =
			document.getElementById("examTitle").value.trim();
			
		const folder = 
			document.getElementById("folderPaths").value.trim();

		// Example:
		// 03 Databricks High Level Architecture
		// ->
		// 03_Databricks_High_Level_Architecture

		// Extract chapter number

		const match =
			title.match(/^(\d+)/);

		const chapter =
			match ? match[1] : "00";

		const json =
	`{
	  "config": {
		"version": "1.0",
		"exam_name": "<div style=\\"color: #3527F5; font-weight: bold; padding: 10px;\\">${title}</div>",
		"link_explanation_base_url": "https://github.com/progressivepull/Databricks-Ease_With_Data/tree/main/markdown_explains/${folder}",
		"link_explanation_folder_name": "EXPLANATION_${chapter}_*",
		"link_explanation_file_name": "EXPLANATION_${chapter}_*",
		"link_answer_base_url": "https://github.com/progressivepull/Databricks-Ease_With_Data/blob/main/markdown_answers/${folder}",
		"link_answer_folder_name": "ANSWER_${chapter}_*",
		"link_answer_file_name": "ANSWER_${chapter}_*",
		"link_terms": "https://github.com/progressivepull/Databricks-Ease_With_Data/blob/main/markdown_terms/terms",
		"readme_content": "https://github.com/progressivepull/Databricks-Ease_With_Data/blob/main/README",
		"shuffle_questions": true,
		"shuffle_options": true,
		"time_limit_minutes": 60
	  },
	`;

		document.getElementById("output").value = json;
    });
	
	$("#copyOutput").on("click", function () {

		const textarea =
			document.getElementById("output");

		textarea.select();

		navigator.clipboard.writeText(textarea.value);

		alert("Copied!");
    });

});