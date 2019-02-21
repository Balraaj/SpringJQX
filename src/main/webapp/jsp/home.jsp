<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored = "false" %>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href='<c:url value="/common/bootstrap-4.0.0-dist/css/bootstrap.min.css"/>' />
<link rel="stylesheet" href='<c:url value="/common/jqwidgets/styles/jqx.base.css"/>' />

<title>Insert title here</title>
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

<div id='jqxWidget' style="font-size: 13px; font-family: Verdana; float: left; margin-top: 5%; margin-left: 24%;">
        <div id="jqxgrid"></div>
    </div>
<script type='text/javascript' src='<c:url value="/common/Jquery/jquery-3.3.1.js"/>'></script>
<script type='text/javascript' src='<c:url value="/common/bootstrap-4.0.0-dist/js/bootstrap.bundle.js"/>'></script>

    <script type="text/javascript" src='<c:url value="/common/jqwidgets/jqxcore.js"/>'></script>
    <script type="text/javascript" src='<c:url value="/common/jqwidgets/jqxdata.js"/>'></script>
    <script type="text/javascript" src='<c:url value="/common/jqwidgets/jqxbuttons.js"/>'></script>
    <script type="text/javascript" src='<c:url value="/common/jqwidgets/jqxscrollbar.js"/>'></script>
    <script type="text/javascript" src='<c:url value="/common/jqwidgets/jqxmenu.js"/>'></script>
    <script type="text/javascript" src='<c:url value="/common/jqwidgets/jqxgrid.js"/>'></script>
    <script type="text/javascript" src='<c:url value="/common/jqwidgets/jqxgrid.selection.js"/>'></script>
    
    <script type="text/javascript" src='<c:url value="/js/home.js"/>'></script>
</body>
</html>