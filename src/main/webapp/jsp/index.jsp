<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored = "false" %>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>
<!DOCTYPE html>
<html>
<head>
<script type='text/javascript' src='<c:url value="/common/Jquery/jquery-3.3.1.js"/>'></script>
<script type='text/javascript' src='<c:url value="/js/index.js"/>'></script>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
hello current time is : ${time}
</body>
</html>