document.getElementById('admin-link').addEventListener('click', function() {
    showSection('admin-section');
    displaySchedules();
    displayAnnouncements();
});

document.getElementById('faculty-link').addEventListener('click', function() {
    showSection('faculty-section');
});

document.getElementById('student-link').addEventListener('click', function() {
    showSection('student-section');
    displayStudentSchedule();
    displayStudentAnnouncements();
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => section.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
}

function showCreateScheduleForm() {
    document.getElementById('create-schedule-form').classList.toggle('hidden');
}

function showAnnouncementForm() {
    document.getElementById('announcement-form').classList.toggle('hidden');
}

document.getElementById('schedule-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const course = document.getElementById('course').value;
    const instructor = document.getElementById('instructor').value;
    const day = document.getElementById('day').value;
    const time = document.getElementById('time').value;
    const schedules = JSON.parse(localStorage.getItem('schedules')) || [];
    schedules.push({ course, instructor, day, time });
    localStorage.setItem('schedules', JSON.stringify(schedules));
    alert('Schedule added');
    displaySchedules();
    document.getElementById('schedule-form').reset();
});

document.getElementById('announcement-form-element').addEventListener('submit', function(event) {
    event.preventDefault();
    const announcement = document.getElementById('announcement').value;
    const announcements = JSON.parse(localStorage.getItem('announcements')) || [];
    announcements.push(announcement);
    localStorage.setItem('announcements', JSON.stringify(announcements));
    alert('Announcement posted');
    displayAnnouncements();
    document.getElementById('announcement-form-element').reset();
});

function viewSchedule() {
    document.getElementById('student-schedule').classList.toggle('hidden');
    displayStudentSchedule();
}

function displaySchedules() {
    const schedules = JSON.parse(localStorage.getItem('schedules')) || [];
    const scheduleList = document.getElementById('schedule-list');
    scheduleList.innerHTML = '';
    schedules.forEach(schedule => {
        const listItem = document.createElement('li');
        listItem.textContent = `${schedule.course} by ${schedule.instructor} on ${schedule.day} at ${schedule.time}`;
        scheduleList.appendChild(listItem);
    });
}

function displayAnnouncements() {
    const announcements = JSON.parse(localStorage.getItem('announcements')) || [];
    const announcementList = document.getElementById('student-announcement-list');
    announcementList.innerHTML = '';
    announcements.forEach(announcement => {
        const listItem = document.createElement('li');
        listItem.textContent = announcement;
        announcementList.appendChild(listItem);
    });
}

function displayStudentSchedule() {
    const schedules = JSON.parse(localStorage.getItem('schedules')) || [];
    const studentScheduleList = document.getElementById('student-schedule-list');
    studentScheduleList.innerHTML = '';
    schedules.forEach(schedule => {
        const listItem = document.createElement('li');
        listItem.textContent = `${schedule.course} by ${schedule.instructor} on ${schedule.day} at ${schedule.time}`;
        studentScheduleList.appendChild(listItem);
    });
}

function displayStudentAnnouncements() {
    const announcements = JSON.parse(localStorage.getItem('announcements')) || [];
    const studentAnnouncementList = document.getElementById('student-announcement-list');
    studentAnnouncementList.innerHTML = '';
    announcements.forEach(announcement => {
        const listItem = document.createElement('li');
        listItem.textContent = announcement;
        studentAnnouncementList.appendChild(listItem);
    });
}
