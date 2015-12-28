$(document).ready(function() {
  $("#search").DataTable({
    ajax: {
      url: "/employers/records.json",
      dataSrc: ""
    },
    columns: [
      {
        data: "name",
        render: function(data, type, row, meta) {
          var escaped = $('<div>').text(data).html();
          return '<a href="' + row['resume'] + '" target="_blank">' + escaped + "</a>";
        }
      },
      {
        data: "major[, ]"
      },
      {
        data: "year"
      },
      {
        data: "degree"
      },
      {
        data: "email",
        render: function(data, type, row, meta) {
          return '<a href="mailto:' + data + '">' + data + '</a>';
        }
      }
    ],
    pageLength: 25
  });
});