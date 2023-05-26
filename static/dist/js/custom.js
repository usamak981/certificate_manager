function createPDF() {
    // var element = document.getElementById('certificate_sec');
    // var opt = {
    //     margin: 0,
    //     padding: 0,
    //     filename: 'DOH_certificate.pdf',
    //     image: {type: 'jpeg', quality: 1},
    //     html2canvas: {scale: 5, logging: false},
    //     jsPDF: {unit: 'in', format: 'A3', orientation: 'L'},
    // };
    // html2pdf().from(element).set(opt).save();
    var element = document.getElementById('certificate_sec');

    // Temporarily hide any elements that should not be included in the PDF
    var hiddenElements = document.querySelectorAll('.hide-in-pdf');
    hiddenElements.forEach(function(element) {
        element.style.display = 'none';
    });

    window.print();

    // Restore the visibility of hidden elements after printing
    hiddenElements.forEach(function(element) {
        element.style.display = '';
    });
};
function createbulkPDF() {
  var element = document.getElementsByClassName('set');
  var certificate_no = document.getElementsByClassName('tst');
  var certificate_no1 = document.getElementsByClassName('tst1');
  var zip = new JSZip(); // Create a new JSZip instance

  var promises = []; // Array to store the promises for each PDF generation

  for (var i = 0; i < element.length; i++) {
    var opt = {
      margin: 0,
      padding: 0,
      filename: certificate_no1[i].textContent + certificate_no[i].textContent + '.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 5, logging: false },
      jsPDF: { unit: 'in', format: 'A3', orientation: 'L' },
    };

    var promise = html2pdf().from(element[i]).set(opt).outputPdf(); // Generate PDF and get the promise

    promises.push(promise); // Add the promise to the array
  }

  Promise.all(promises)
    .then(function (pdfs) {
      // Once all the PDFs are generated
      pdfs.forEach(function (pdf, index) {
        var filename = certificate_no1[index].textContent + certificate_no[index].textContent + '.pdf';
        zip.file(filename, pdf, { binary: true }); // Add each PDF to the zip file
      });

      // Generate the zip file and trigger the download
      zip.generateAsync({ type: 'blob' }).then(function (content) {
        saveAs(content, 'certificates.zip');
      });
    })
    .catch(function (error) {
      console.error('Error generating PDFs:', error);
    });
}

function createbulkPDFUK() {
  var element = document.getElementsByClassName('set');
  var certificate_no = document.getElementsByClassName('tst');
  var certificate_no1 = document.getElementsByClassName('tst1');
  var zip = new JSZip(); // Create a new JSZip instance

  var promises = []; // Array to store the promises for each PDF generation

  for (var i = 0; i < element.length; i++) {
  var opt = {
        margin: 0,
        padding: 0,
        filename: certificate_no1[i].textContent + certificate_no[i].textContent +'.pdf',
        image: {type: 'jpeg', quality: 1},
        html2canvas: {scale: 5, logging: false},
        jsPDF: {unit: 'in', format: 'A3', orientation: 'p'},
        };

    var promise = html2pdf().from(element[i]).set(opt).outputPdf(); // Generate PDF and get the promise

    promises.push(promise); // Add the promise to the array
  }

  Promise.all(promises)
    .then(function (pdfs) {
      // Once all the PDFs are generated
      pdfs.forEach(function (pdf, index) {
        var filename = certificate_no1[index].textContent + certificate_no[index].textContent + '.pdf';
        zip.file(filename, pdf, { binary: true }); // Add each PDF to the zip file
      });

      // Generate the zip file and trigger the download
      zip.generateAsync({ type: 'blob' }).then(function (content) {
        saveAs(content, 'certificates.zip');
      });
    })
    .catch(function (error) {
      console.error('Error generating PDFs:', error);
    });
}

//function createbulkPDFUK() {
//  var element = document.getElementsByClassName('set');
//  var certificate_no = document.getElementsByClassName('tst');
//  var certificate_no1 = document.getElementsByClassName('tst1');
//  var zip = new JSZip(); // Create a new JSZip instance
//
//  var promises = []; // Array to store the promises for each PDF generation
//
//  for (var i = 0; i < element.length; i++) {
//    var opt = {
//      margin: 0,
//      padding: 0,
//      filename: certificate_no1[i].textContent + certificate_no[i].textContent + '.pdf',
//      image: { type: 'jpeg', quality: 1 },
//      html2canvas: { scale: 5, logging: false },
//      jsPDF: { unit: 'in', format: 'A3', orientation: 'L' },
//    };
//
//    var promise = html2pdf().from(element[i]).set(opt).outputPdf(); // Generate PDF and get the promise
//
//    promises.push(promise); // Add the promise to the array
//  }
//
//  Promise.all(promises)
//    .then(function (pdfs) {
//      // Once all the PDFs are generated
//      pdfs.forEach(function (pdf, index) {
//        var filename = certificate_no1[index].textContent + certificate_no[index].textContent + '.pdf';
//        zip.file(filename, pdf, { binary: true }); // Add each PDF to the zip file
//      });
//
//      // Generate the zip file and trigger the download
//      zip.generateAsync({ type: 'blob' }).then(function (content) {
//        saveAs(content, 'certificates.zip');
//      });
//    })
//    .catch(function (error) {
//      console.error('Error generating PDFs:', error);
//    });
//}


//function createbulkPDFUK() {
//    var element = document.getElementsByClassName('set');
//    var certificate_no = document.getElementsByClassName('tst');
//    var certificate_no1 = document.getElementsByClassName('tst1');
//    for (i=0; i<element.length; i++){
//        var opt = {
//        margin: 0,
//        padding: 0,
//        filename: certificate_no1[i].textContent + certificate_no[i].textContent +'.pdf',
//        image: {type: 'jpeg', quality: 1},
//        html2canvas: {scale: 5, logging: false},
//        jsPDF: {unit: 'in', format: 'A3', orientation: 'p'},
//        };
//        html2pdf().from(element[i]).set(opt).save();
//}
//
//};


function certificate_dha() {
    var element = document.getElementById('certificate_dha_sec');
    var opt = {
        margin: 0,
        padding: 0,
        filename: 'DHA_certificate.pdf',
        image: {type: 'jpeg', quality: 1},
        html2canvas: {scale: 5, logging: false},
        jsPDF: {unit: 'in', format: 'A3', orientation: 'L'},
    };
    html2pdf().from(element).set(opt).save();
};

function create_uk1PDF() {
    var element = document.getElementById('certificate_uk1_sec');
    var opt = {
        margin: 0,
        padding: 0,
        filename: 'uk1_CPD_certificate.pdf',
        image: {type: 'jpeg', quality: 1},
        html2canvas: {scale: 5, logging: false},
        jsPDF: {unit: 'in', format: 'A3', orientation: 'p'},
    };
    html2pdf().from(element).set(opt).save();
};

function create_uk2PDF() {
    var element = document.getElementById('certificate_uk2_sec');
    var opt = {
        margin: 0,
        padding: 0,
        filename: 'uk2_CPD_certificate.pdf',
        image: {type: 'jpeg', quality: 1},
        html2canvas: {scale: 5, logging: false},
        jsPDF: {unit: 'in', format: 'A3', orientation: 'p'},
    };
    html2pdf().from(element).set(opt).save();
};

// Get a reference to the dropdown element
var dropdown = document.getElementById("id_category");

// Get a reference to the section to show/hide
var section_description = document.getElementById("id_description");
var descriptionLabel = document.querySelector('label[for="id_description"]');

var section_status = document.getElementById("id_status");
var statusLabel = document.querySelector('label[for="id_status"]');

var section_location = document.getElementById("id_location");
var locationLabel = document.querySelector('label[for="id_location"]');

var section_points = document.getElementById("id_points");
var pointsLabel = document.querySelector('label[for="id_points"]');

var section_event_date = document.getElementById("id_event_date");
var event_dateLabel = document.querySelector('label[for="id_event_date"]');

var section_is_quiz_required = document.getElementById("id_is_quiz_required");
var is_quiz_requiredLabel = document.querySelector('label[for="id_is_quiz_required"]');

var section_mumaris_days = document.getElementById("id_mumaris_days");
var mumaris_daysLabel = document.querySelector('label[for="id_mumaris_days"]');
section_mumaris_days.style.display = "none";
mumaris_daysLabel.style.display = "none";


var section_mumaris_days = document.getElementById("id_mumaris_days");
var mumaris_daysLabel = document.querySelector('label[for="id_mumaris_days"]');
section_mumaris_days.style.display = "none";
mumaris_daysLabel.style.display = "none";

var section_facility_number = document.getElementById("id_facility_number");
var facility_numberLabel = document.querySelector('label[for="id_facility_number"]');
section_facility_number.style.display = "none";
facility_numberLabel.style.display = "none";

var section_accreditation_no = document.getElementById("id_accreditation_no");
var accreditation_noLabel = document.querySelector('label[for="id_accreditation_no"]');
var event_date_Label = document.querySelector('label[for="id_event_date"]');
section_accreditation_no.style.display = "none";
accreditation_noLabel.style.display = "none";

var section1 = document.getElementById("id_cpd_approval_no");
var section2 = document.getElementById("id_cpd_org_no");
var cpdApprovalNoLabel = document.querySelector('label[for="id_cpd_approval_no"]');
var cpdOrgNoLabel = document.querySelector('label[for="id_cpd_org_no"]');

function display_main_element() {

    if (statusLabel != null || section_status != null) {
        section_status.style.display = "block";
        statusLabel.style.display = "block";
    }

    section_description.style.display = "block";
    descriptionLabel.style.display = "block";

    section_location.style.display = "block";
    locationLabel.style.display = "block";

    section_points.style.display = "block";
    pointsLabel.style.display = "block";

    section_event_date.style.display = "block";
    event_dateLabel.style.display = "block";

    section_is_quiz_required.style.display = "block";
    is_quiz_requiredLabel.style.display = "block";
}

function hide_main_element() {
    if (statusLabel != null || section_status != null) {
        section_status.style.display = "none";
        statusLabel.style.display = "none";
    }

    section_description.style.display = "none";
    descriptionLabel.style.display = "none";

    section_location.style.display = "none";
    locationLabel.style.display = "none";

    section_points.style.display = "none";
    pointsLabel.style.display = "none";

    section_event_date.style.display = "none";
    event_dateLabel.style.display = "none";

}

// Add an event listener to the dropdown to detect when an option is selected
dropdown.addEventListener("change", function () {
    // Get the selected option
    var selectedOption = dropdown.options[dropdown.selectedIndex].text;
    display_main_element()

    // Show/hide the section based on the selected option
    if (selectedOption === "UK CPD Accreditation 1" || selectedOption === "UK CPD Accreditation 2") {
        section1.style.display = "block";
        section2.style.display = "block";
        cpdApprovalNoLabel.style.display = "block";
        cpdOrgNoLabel.style.display = "block";
        event_date_Label.textContent = "Date of CPD Activity";

        section_accreditation_no.style.display = "none";
        accreditation_noLabel.style.display = "none";
        section_facility_number.style.display = "none";
        facility_numberLabel.style.display = "none";
        section_mumaris_days.style.display = "none";
        mumaris_daysLabel.style.display = "none";
        if (selectedOption === "UK CPD Accreditation 2") {
            event_date_Label.textContent = "Approval Date of CPD Activity";
        }

    } else {
        if (selectedOption === "DOH Accreditation") {
            section_accreditation_no.style.display = "block";
            accreditation_noLabel.textContent = "Under Accreditation ID Number";
            event_date_Label.textContent = "Held on";
            accreditation_noLabel.style.display = "block";
            section_facility_number.style.display = "block";
            facility_numberLabel.style.display = "block";

            section1.style.display = "none";
            section2.style.display = "none";
            cpdApprovalNoLabel.style.display = "none";
            cpdOrgNoLabel.style.display = "none";
            section_mumaris_days.style.display = "none";
            mumaris_daysLabel.style.display = "none";
        }
        if (selectedOption === "DHA Accreditation") {
            console.log('This is test');
            accreditation_noLabel.textContent = "Accreditation No";
            event_date_Label.textContent = "Held on";
            section_accreditation_no.style.display = "block";
            accreditation_noLabel.style.display = "block";

            section1.style.display = "none";
            section2.style.display = "none";
            cpdApprovalNoLabel.style.display = "none";
            cpdOrgNoLabel.style.display = "none";
            section_facility_number.style.display = "none";
            facility_numberLabel.style.display = "none";
            section_mumaris_days.style.display = "none";
            mumaris_daysLabel.style.display = "none";
        }
        if (selectedOption === "SCFHS Accreditation") {

            section_mumaris_days.style.display = "block";
            mumaris_daysLabel.style.display = "block";
            accreditation_noLabel.textContent = "MUMARIS PLUS Days";

            section_accreditation_no.style.display = "none";
            accreditation_noLabel.style.display = "none";
            section1.style.display = "none";
            section2.style.display = "none";
            cpdApprovalNoLabel.style.display = "none";
            cpdOrgNoLabel.style.display = "none";
            section_facility_number.style.display = "none";
            facility_numberLabel.style.display = "none";

            hide_main_element()
        }
    }
});

// Add an event listener to the dropdown to detect when an option is selected
$(function() {
    // Get the selected option
    var selectedOption = dropdown.options[dropdown.selectedIndex].text;
    display_main_element()

    // Show/hide the section based on the selected option
    if (selectedOption === "UK CPD Accreditation 1" || selectedOption === "UK CPD Accreditation 2") {
        section1.style.display = "block";
        section2.style.display = "block";
        cpdApprovalNoLabel.style.display = "block";
        cpdOrgNoLabel.style.display = "block";
        event_date_Label.textContent = "Date of CPD Activity";

        section_accreditation_no.style.display = "none";
        accreditation_noLabel.style.display = "none";
        section_facility_number.style.display = "none";
        facility_numberLabel.style.display = "none";
        section_mumaris_days.style.display = "none";
        mumaris_daysLabel.style.display = "none";
        if (selectedOption === "UK CPD Accreditation 2") {
            event_date_Label.textContent = "Approval Date of CPD Activity";
        }

    } else {
        if (selectedOption === "DOH Accreditation") {
            section_accreditation_no.style.display = "block";
            accreditation_noLabel.textContent = "Under Accreditation ID Number";
            event_date_Label.textContent = "Held on";
            accreditation_noLabel.style.display = "block";
            section_facility_number.style.display = "block";
            facility_numberLabel.style.display = "block";

            section1.style.display = "none";
            section2.style.display = "none";
            cpdApprovalNoLabel.style.display = "none";
            cpdOrgNoLabel.style.display = "none";
            section_mumaris_days.style.display = "none";
            mumaris_daysLabel.style.display = "none";
        }
        if (selectedOption === "DHA Accreditation") {
            console.log('This is test');
            accreditation_noLabel.textContent = "Accreditation No";
            event_date_Label.textContent = "Held on";
            section_accreditation_no.style.display = "block";
            accreditation_noLabel.style.display = "block";

            section1.style.display = "none";
            section2.style.display = "none";
            cpdApprovalNoLabel.style.display = "none";
            cpdOrgNoLabel.style.display = "none";
            section_facility_number.style.display = "none";
            facility_numberLabel.style.display = "none";
            section_mumaris_days.style.display = "none";
            mumaris_daysLabel.style.display = "none";
        }
        if (selectedOption === "SCFHS Accreditation") {

            section_mumaris_days.style.display = "block";
            mumaris_daysLabel.style.display = "block";
            accreditation_noLabel.textContent = "MUMARIS PLUS Days";

            section_accreditation_no.style.display = "none";
            accreditation_noLabel.style.display = "none";
            section1.style.display = "none";
            section2.style.display = "none";
            cpdApprovalNoLabel.style.display = "none";
            cpdOrgNoLabel.style.display = "none";
            section_facility_number.style.display = "none";
            facility_numberLabel.style.display = "none";

            hide_main_element()
        }
    }
});