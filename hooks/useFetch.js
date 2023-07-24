import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint) =>{
    const [data, setData] = useState([])
    const [isLoading, setIsLoading]I= useState(false)
    const [error, setError] = useState(null)
    // go to 56:00 in the vid
}