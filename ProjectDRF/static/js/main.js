$(document).ready(function(){



	 $('#btnsubmit').click(function(){


	  let csrf=$('input[name=csrfmiddlewaretoken]').val();
	  let companyVal = $('#id_company').val();
      var anonymousVal = $("input[id='id_is_anonymous']:checked").val();
	  let job_durationVal = $('#id_job_duration').val();
	  let is_current_Employee = $('input[id="id_is_current_employee"]:checked').val();
	  let department = $('#id_department').val();
	  let emp_status= $('#id_emp_status').val();

	  let job_title= $('#id_Job_title').val();
	  let overall_experience= $('#id_Overall_experience').val();
	  let overall_rating= $('#id_Overall_rating').val();
	  let pros= $('#id_Pros').val();
	  let cons= $('#id_cons').val();

	  let salary = parseInt($('#id_salary').val());
	  let salary_type = $('#id_salary_type').val();

	  let company_culture_rating = parseInt($('#id_company_culture_rating').val()); 
	  let working_atmosphere_rating = parseInt($('#id_working_atmosphere_rating').val());
	  let communication_rating = parseInt($('#id_communication_rating').val());
	  let task_and_responsibilities_rating = parseInt($('#id_task_and_responsibilities_rating').val());
	  let work_life_balance_rating = parseInt($('#id_work_life_balance_rating').val());
	  let stress_rating = parseInt($('#id_stress_rating').val());
	  let advancement_rating = parseInt($('#id_advancement_rating').val());
	  let supervisor_rating = parseInt($('#id_supervisor_rating').val());

	  let overall_experience_rating = $('#id_overall_experience_rating').val();
	  let interview_process_description = $('#id_interview_process_description').val();
	  let interview_difficulty = $('#id_interview_difficulty').val();
	  let suggestions_to_other_aspirants = $('#id_suggestions_to_other_aspirants').val();
	  let feedback_to_organization = $('#id_feedback_to_organization').val();

	  let would_you_recommend = $('input[id="id_would_you_recommend"]:checked').val();

	  // console.log(would_you_recommend);


	    if (companyVal=='') {console.log('please enter company')}
	      else if (job_durationVal=='') {console.log('select job duration')}
	      else if (anonymousVal=='') {console.log('please choose anonymous')}
	      else if (is_current_Employee=='') {console.log('choose if you are currently working')}


	        else{
	          mydata={

	            company:companyVal,
	            job_duration:job_durationVal,
	            anonymous:anonymousVal,
	            is_current_Employee:is_current_Employee,
	            department:department,
	            emp_status:emp_status,

	            job_title:job_title,
				overall_experience:overall_experience,
				overall_rating:overall_rating,
				pros:pros,
				cons:cons, 

				salary:salary,
				salary_type:salary_type,

				company_culture_rating:company_culture_rating,
				working_atmosphere_rating:working_atmosphere_rating,
				communication_rating:communication_rating,
				task_and_responsibilities_rating:task_and_responsibilities_rating,
				work_life_balance_rating:work_life_balance_rating,
				stress_rating:stress_rating,
				supervisor_rating:supervisor_rating,
				advancement_rating:advancement_rating,

				overall_experience_rating:overall_experience_rating,
	          	interview_process_description:interview_process_description,
	          	interview_difficulty:interview_difficulty,
	          	suggestions_to_other_aspirants:suggestions_to_other_aspirants,
	          	feedback_to_organization:feedback_to_organization,

				would_you_recommend:would_you_recommend,

	            csrfmiddlewaretoken:csrf
	          };

	          $.ajax({
	            url:'/review/',
	            method:'POST',
	            data:mydata,

	            success:function(data){
	              console.log(data);
	            },

	          })
	        }

	  });



    // Radio button ko thau ma box use garna ko lagi chaine jquery code

//Anonymous review ko
    // add/remove checked class
    $(".image-radio").each(function(){
        if($(this).find('input[id="id_is_anonymous"]').first().attr("checked")){
            $(this).addClass('review__situation__child_clicked');
        }else{
            $(this).removeClass('');
        }
    });

    // sync the input state
    $(".image-radio").on("click", function(e){
        $(".image-radio").removeClass('review__situation__child_clicked');
        $(this).addClass('review__situation__child_clicked');
        var $radio = $(this).find('input[id="id_is_anonymous"]');
        $radio.prop("checked",!$radio.prop("checked"));

        e.preventDefault();
    });

//Current job ki ex job ko
    $(".image-radio-job").each(function(){
        if($(this).find('input[id="id_is_current_employee"]').first().attr("checked")){
            $(this).addClass('review__situation__child_clicked');
        }else{
            $(this).removeClass('');
        }
    });

    // sync the input state
    $(".image-radio-job").on("click", function(e){
        $(".image-radio-job").removeClass('review__situation__child_clicked');
        $(this).addClass('review__situation__child_clicked');
        var $radio = $(this).find('input[id="id_is_current_employee"]');
        $radio.prop("checked",!$radio.prop("checked"));

        e.preventDefault();
    });

    //Would you recommend this company ko lagi
    $(".image-radio-recommend").each(function(){
        if($(this).find('input[id="id_would_you_recommend"]').first().attr("checked")){
            $(this).addClass('review__situation__child_clicked');
        }else{
            $(this).removeClass('');
        }
    });

    
    $(".image-radio-recommend").on("click", function(e){
        $(".image-radio-recommend").removeClass('review__situation__child_clicked');
        $(this).addClass('review__situation__child_clicked');
        var $radio = $(this).find('input[id="id_would_you_recommend"]');
        $radio.prop("checked",!$radio.prop("checked"));

        e.preventDefault();
    });






$("#atmosphere").stars({
      text: ["Bad", "Not so bad", "Good", "Better", "Perfect"],
      color: "#ff4800",
      click: function (i) {
        $("#atmosphere-comment").css("display", "block");
        console.log(i);
      },
    });

});